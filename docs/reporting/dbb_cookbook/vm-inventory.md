---
title: "VM Inventory"
sidebar_position: 20
---

Detailed Virtual Machine Information along with Virtual Host.

select
    h.device\_fk
    ,h.device\_name                           host\_device\_name
    ,h.total\_cpus                            host\_cpu\_count
    ,h.ram\_mb                                host\_ram\_gb
    ,h.os\_name                               host\_os\_name
    ,h.all\_ips                              host\_all\_ips    
    ,vmm.device\_name                         vm\_manager
    ,h.device\_type                           host\_hardware\_type
    ,h.os\_architecture                       host\_os\_arch
    ,h.os\_version                            host\_os\_version
    ,h.os\_version\_number                     host\_os\_version\_number
    ,case when h.threads\_per\_core > 1
         then 'yes'  else 'no'
    end                                      host\_is\_hyperthreaded
    ,h.core\_per\_cpu                          host\_cpu\_cores
    ,h.cpu\_speed                             host\_cpu\_speed\_ghz
          /\*  additional host info  \*/
    ,h.threads\_per\_core                      host\_core\_threads
    ,case when h.core\_per\_cpu is null
        then h.total\_cpus
          when h.threads\_per\_core > 1
        then h.total\_cpus \* h.core\_per\_cpu \* h.threads\_per\_core
          else h.total\_cpus \* h.core\_per\_cpu
    end                                      host\_compute\_power
          /\*  assemble guest information \*/
    ,g.device\_fk                             guest\_device\_id
    ,g.device\_name                           guest\_name
    ,g.all\_ips                               guest\_ip\_addresses
    ,g.os\_name                               guest\_os\_name
    ,g.in\_service                            guest\_is\_in\_service
    ,g.os\_architecture                       guest\_os\_arch
    ,g.os\_version                            guest\_os\_version
    ,g.os\_version\_number                     guest\_os\_version\_number
    ,case
       when g.threads\_per\_core > 1       
               then 'yes'   else 'no'  
          end                                guest\_is\_hyperthreaded
    ,g.total\_cpus                            guest\_cpu\_count
    ,g.core\_per\_cpu                          guest\_cpu\_cores
    ,g.cpu\_speed                             guest\_cpu\_speed\_ghz
    ,g.ram\_mb                                guest\_ram\_gb
    ,g.local\_disk\_count                      guest\_disk\_count
          /\*  additonal info available - for hosts and guests  \*/
    ,g.threads\_per\_core                      guest\_core\_threads
    ,case when g.core\_per\_cpu is null
          then g.total\_cpus
          when g.threads\_per\_core > 1
        then g.total\_cpus \* g.core\_per\_cpu \* g.threads\_per\_core
          else g.total\_cpus \* g.core\_per\_cpu
    end                                      guest\_compute\_power
    ,h.last\_discovered                            host\_last\_update
    ,g.last\_discovered                            guest\_last\_update
     /\*  get the hosts that have virtual\_host flag on  \*/
from (select \* from view\_dbb\_compute\_v2  hsq 
where hsq.virtual\_host /\*
 and hsq.os\_name NOT IN ('f5','netscaler' \*/ )) h
     /\*  get the virtual devices that are not part of the network OSs  \*/           
left join (select \* from view\_dbb\_compute\_v2  gsq 
where gsq.device\_type = 'virtual') g   
             on g.virtual\_host\_device\_fk = h.device\_fk
left join view\_dbb\_compute\_v2 vmm 
             on vmm.device\_fk = h.vm\_manager\_device\_fk
order by h.device\_name asc

 

* * *

**NOTES**

Use as part of your resource management.

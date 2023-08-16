## How to submit feedback for Device42 Documentation

At Device42 we strive for accurate, clear and informative documentation. If you encounter issues with the content or functionality of our documentation, please let us know. Your feedback ensures that our documentation remains a reliable resource.

You can alert us to a concern in two ways:
- provide feedback describing the problem
- edit the documentation on GitHub

### How do I provide feedback?

This option is suitable for general reporting including comments and compliments! You can alert us to issues such as broken links, missing images, documentation requests, and more.

Click the "Page feedback" tab at the top of the documentation page. Describe the issue that you encountered in the form that opens. Remember to include the URL or title of the article where you found the issue, if applicable.

![](/assets/images/feedback_widget.png)

If you'd like us to let you know when we've made the necessary changes you've suggested, please include your email address.

### How do I edit the document on Github?

In this section we'll outline how to locate the document to edit, make changes to different aspects of the file, and submit those changes by opening a Pull Request. 

### How to find the markdown file

This option is suitable if you're able to make changes to the documentation yourself. After editing to the documentation you'll submit it to us by opening a Pull Request on Github. We'll then review the proposed changes before implementing it on our website.

1. Sign in to [GitHub](https://github.com/login) and go to the [Device42 documentation](https://github.com/device42/device42-docs) repository.
2. Make a copy of the repository by clicking on the "Fork" button and then click on "Create fork". By forking the repository you create a copy of it that you can make changes to without affecting the original.

![](/assets/images/feedback_fork_repo.png)

![](/assets/images/feedback_fork_repo_create.png)

3. Open the "Docs" folder to locate the [markdown](https://www.markdownguide.org/getting-started/) file of the document you want to edit. Markdown files end with the `.md` extension. Note that the folder structure of the repository matches that on the website.

![](/assets/images/feedback_docs_folder.png)

In this example, we selected `installation-virtual-box.md` from the `docs/getstarted/installation` location. Clicking it opens a preview view of the file to the right-hand side.

![](/assets/images/feedback_locate_md.png)

### How to make changes to the markdown file

Open the editing mode by clicking on the pen icon on the top-right of the preview view to get started.

![](/assets/images/feedback_edit_mode.png)

You'll notice that markdown files have syntax to format the text, add links, and add images. We'll outline how to make changes to each of these.

In this example, we've added some text to the document.

![](/assets/images/feedback_text_changes.png)

Bullet points are designated with a hash and space `- ` before the content.

![](/assets/images/feedback_bullet_point.png)

Links contain two parts; text within square brackets followed by parentheses containing a URL or relative link. A link to Device42's home page looks like `[Device42](https://www.device42.com/)`.

Images begin with an exclamation mark (`!`) followed by [alt text](https://www.w3schools.com/tags/att_img_alt.asp) within square brackets and the path or URL of the image asset in parentheses. For example `![Device42 logo](/assets/images/example.png)`Leaving out alt text is acceptable, for example `![](/assets/images/example.png)`.

![](/assets/images/feedback_link_image_example.png)

Device42 main headings are preceded with `##` and secondary headings with `###`. Text written between `**` is **bold** and text between the `_` symbols are _italicized_. 

Visit [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for more information on markdown syntax.

### How to submit your changes by opening a Pull Request

Once you're done editing you'll need to commit your changes before opening a pull request.

1. Review the changes you've made by entering the Preview mode.

    ![](/assets/images/feedback_preview_changes.png)

2. Click on the "Commit changes" button.

    ![](/assets/images/feedback_commit_changes.png)

3. In the modal window that opens you can describe the changes you made. Then select the "Create a **new branch** for this commit and start a pull request" option. Name your branch in the text field below. Note that have to be separated using dashes `-`. Click on propose changes to continue.

    ![](/assets/images/feedback_propose_changes.png)

4. It's important to create a pull request to the main branch of _Device42's repository_ and not to your own forked copy. Click on the "compare across forks" link on the "Comparing changes" page.

    ![](/assets/images/feedback_compare_across_forks.png)

5. Change the "base repository" from your forked repository to `device42/device42-docs`.

    ![](/assets/images/feedback_choose_base_repo.png)

6. Create a pull request by clicking on "create pull request" and click on "create pull request" again in the dialog box that opens next. 

    ![](/assets/images/feedback_create_pr.png)

    ![](/assets/images/feedback_create_pr_2.png)

7. You'll see the details of your now open pull request including its number (#48 in the example). Your proposed changes will be reviewed by our team before going through an internal test environment. Once successful your changes will be publicly visible.

    ![](/assets/images/feedback_open_pr.png)

For more information about Github's fork and pull model refer to the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models). If you need more assistance please [contact us](https://www.device42.com/contact/).

Thank you for helping us to improve our documentation and enhance the experience for everyone using our documentation. We truly appreciate your active involvement in our journey toward excellence.
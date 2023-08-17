---
title: "How to submit feedback for Device42 Documentation"
sidebar_position: 100
---

At Device42 we strive for accurate, clear and informative documentation. If you encounter issues with the content or functionality of our documentation, please let us know. Your feedback ensures that our documentation remains a reliable resource.

You can alert us to a concern in two ways:
- provide feedback describing the problem
- edit the documentation on GitHub

### How do I provide feedback?

This option is suitable for general reporting including comments and compliments! You can alert us to issues such as broken links, missing images, documentation requests, and more.

Click the "Page feedback" tab at the top of the documentation page. Describe your issue or concern in the window that opens. Remember to include the URL or title of the article where you encountered the issue.

![](/assets/images/feedback_widget.png)

If you'd like us to let you know when we've implemented your suggestions, please include your email address.

### How do I edit a document on GitHub?

This option is suitable if you're able to make changes to the documentation yourself. After editing to the documentation you'll submit it to us by creating a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) on GitHub. We'll then review your proposed changes before making them live on our website.

To get started, click on the "Edit this page" link on the document you want to edit.

![](/assets/images/feedback_editing_link.png)

You'll be prompted to sign in to [GitHub](https://github.com/login) if you're not already logged in to GitHub on your browser. Once you're signed in you'll be directed to [Device42's documentation](https://github.com/device42/device42-docs) repository. 

Next make your own copy of the Device42 document repository by clicking on the "Fork" button.  By 'forking' the repository you create a copy that you can safely make changes to without affecting the original.

![](/assets/images/feedback_fork_repo.png)

In the next dialog box that opens click on "Create fork".

![](/assets/images/feedback_fork_repo_create.png)

### Opening a pull request if you've forked the Device42 documentation before.

If you've previously forked Device42's documentation and are signed into GitHub on your browser, you'll be directed to Device42's repository on GitHub when clicking the "Edit this page" link. 

In this case, after clicking "commit changes..." in edit mode you'll see the "you can’t commit to main because it is a protected branch" message on the "Propose changes" modal window. 

![](/assets/images/feedback_existing_repo.png)

You can still click on the "Propose changes" button to create a pull request. However, you'll be directed to create a pull request targeting your repository instead of Device42's repository. To rectify this, click on "compare across forks" and in the "base repository" dropdown menu select `device42/device42-docs` before creating the pull request.

![](/assets/images/feedback_choose_base_repo.png)

### How to make changes to the markdown file

If you're not in "Edit" mode already, enter it by clicking the pen icon on the top-right of the preview view.

![](/assets/images/feedback_edit_mode.png)

[Markdown](https://www.markdownguide.org/getting-started/) are plain text documents with specific syntax to format text and add links and images. We'll outline how to add text, bullet points, and work with link and image syntax.

In this example, we've added some text to the document.

![](/assets/images/feedback_text_changes.png)

Bullet points are designated with a hash and space `- ` before the content.

![](/assets/images/feedback_bullet_point.png)

Links contain two parts; text within square brackets followed by parentheses containing a URL or relative link. A link to Device42's home page looks like `[Device42](https://www.device42.com/)`.

Images begin with an exclamation mark (`!`) followed by [alt text](https://www.w3schools.com/tags/att_img_alt.asp) within square brackets and the path or URL of the image asset in parentheses. For example `![Device42 logo](/assets/images/example.png)`Leaving out alt text is acceptable, for example `![](/assets/images/example.png)`.

![](/assets/images/feedback_link_image_example.png)

In addition, note that Device42 main headings are preceded with `##` and secondary headings with `###`. Text written between `**` is **bold** and text between the `_` symbols are _italicized_. Sections are demarcated with `* * *` before and after the section's content.

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

6. Create a pull request by clicking on "create pull request". 

![](/assets/images/feedback_create_pr.png)

You'll be prompted to click on "create pull request" again in the dialog box that opens next. 

![](/assets/images/feedback_create_pr_2.png)

7. You'll see the details of your now open pull request including its number (#48 in the example). Your proposed changes will be reviewed by our team before going through an internal test environment. Once successful your changes will be publicly visible.

![](/assets/images/feedback_open_pr.png)

For more information about GitHub's fork and pull model refer to the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models). If you need more assistance please [contact us](https://www.device42.com/contact/).

Thank you for helping us to improve our documentation and enhance the experience for everyone using our documentation.

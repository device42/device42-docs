---
title: "How To Submit Feedback on Device42 Documentation"
sidebar_position: 100
---

At Device42, we strive for accurate, clear, informative documentation. If you encounter issues with the content or functionality of our documentation, please let us know. Your feedback ensures that our documentation remains a reliable resource.

You can alert us to a problem or error in one of two ways:
- Provide feedback describing the problem from our feedback widget on our docs site.
- Edit the documentation on GitHub.

### How Do I Provide Feedback Using the Device42 Feedback Widget?

Use the Device42 feedback widget on our docs site for general reporting, including comments and compliments! You can alert us to issues such as broken links or missing images, or make a request for documentation.

From the documentation page you want to comment on, click "Page feedback" in the navigation bar. In the window that opens, describe the issue or make a comment in the text field.

![](/assets/images/feedback_widget.png)

If you'd like to, you can include your email address.

### How Do I Edit a Document on GitHub?

To edit a document in GitHub, you can create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) with your changes, and we'll review them before making them live on our website.

Start by clicking the "Edit this page" link at the bottom of the documentation page you want to edit.

![](/assets/images/feedback_editing_link.png)

You'll be prompted to sign in to [GitHub](https://github.com/login) if you're not already logged in to GitHub in your browser. When you're signed in, you'll be directed to the [Device42 documentation](https://github.com/device42/device42-docs) repository. 

Make a copy of the Device42 document repository by clicking the "Fork" button. Forking a repository creates a copy that you can safely make changes to without affecting the original.

![](/assets/images/feedback_fork_repo.png)

In the dialog box that opens, click "Create fork".

![](/assets/images/feedback_fork_repo_create.png)

### Opening a Pull Request if You’ve Forked the Device42 Documentation Repository Before

If you've previously forked the Device42 documentation repo and you're signed in to GitHub in your browser, clicking the "Edit this page" link will take you directly to the page on GitHub. 

Once you've made changes to the document and you click "Commit changes...", the "Propose changes" modal window will include the message, "You can’t commit to `main` because it is a protected branch". 

![](/assets/images/feedback_existing_repo.png)

Now if you click the "Propose changes" button, your pull request will target your forked repository instead of the Device42 repository.

To target your pull request to the correct repository, do the following:

* Click "compare across forks".

![](/assets/images/feedback_compare_across_forks.png)

* In the "base:" dropdown menu, select `device42/device42-docs`. 

![](/assets/images/feedback_choose_base_repo.png)

* Click "Create pull request".

### How To Make Changes to the Markdown File

If you're not in "Edit" mode already, enter it by clicking the pen icon on the top-right of the preview window.

![](/assets/images/feedback_edit_mode.png)

[Markdown](https://www.markdownguide.org/getting-started/) documents are plain-text documents with specific syntax to format text and add links and images. We'll outline how to add text and bullet points, and work with link and image syntax.

In this example, we've added some text to the document.

![](/assets/images/feedback_text_changes.png)

Bullet points are designated with a hash and space `- ` before the content.

![](/assets/images/feedback_bullet_point.png)

Links contain two parts: Text in square brackets followed by parentheses containing a URL or relative link. A link to the Device42 home page, for example, looks like `[Device42](https://www.device42.com/)`.

Images begin with an exclamation mark (`!`) followed by [alt text](https://www.w3schools.com/tags/att_img_alt.asp) in square brackets and the path or URL of the image asset in parentheses. For example, `![Device42 logo](/assets/images/example.png)`. You can leave out alt text for the image like this: `![](/assets/images/example.png)`.

![](/assets/images/feedback_link_image_example.png)

Here are some more tips for editing in Markdown:

* In Device42 documentation, main headings are preceded with `##` and secondary headings with `###`.
* Add `**` before and after text to make it **bold** (`**bold**`) or `_` to make it _italic_ (`_italic_`).
* Demarcate sections with `* * *` at the start and end of the section content.

Visit [markdownguide.org](https://www.markdownguide.org/cheat-sheet/) for more information on Markdown syntax.

### How To Submit Your Changes by Opening a Pull Request

When you're done editing, you will commit your changes before opening a pull request.

1. Review the changes you made in preview mode by clicking "Preview".

![](/assets/images/feedback_preview_changes.png)

2. Click the "Commit changes" button.

![](/assets/images/feedback_commit_changes.png)

3. In the modal window that opens, you can describe the changes you made (1). Select the "Create a **new branch** for this commit and start a pull request" option and give your branch a name in the text field below (2). Note that branch names in GitHub can't include spaces. To separate words in the name you give your branch, use a dash `-`. Click "Propose changes" to continue.

![](/assets/images/feedback_propose_changes.png)

4. Make sure that your pull request is being made to the main branch of _Device42's repository_ and not your own forked copy. To double check that you're opening the pull request to the correct branch, click the "compare across forks" link on the "Comparing changes" page.

![](/assets/images/feedback_compare_across_forks.png)

5. In the "base repository" dropdown, change from your forked repository to `device42/device42-docs`.

![](/assets/images/feedback_choose_base_repo.png)

6. Click "Create pull request". 

![](/assets/images/feedback_create_pr.png)

You'll be prompted to click "Create pull request" again in the dialog box that opens next. 

![](/assets/images/feedback_create_pr_2.png)

7. You'll see the details of your open pull request, including its number (#48 in the example). 

![](/assets/images/feedback_open_pr.png)

Our team will review and test your proposed changes before they are made publicly visible.

For more information about the GitHub fork and pull model, refer to the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models). If you need more assistance, please [contact us](https://www.device42.com/contact/).

Thank you for helping us improve our documentation and enhancing our user experience.

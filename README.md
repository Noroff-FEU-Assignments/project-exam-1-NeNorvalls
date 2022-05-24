## Project Exam 1

## Goal

To put into practice the skills learned over your first year of studies.

## Brief

You have been tasked with creating a blog site. You can choose the design and topics covered on the blog, but it should have at least the following pages:

- Home page
- About page
- List of blog posts
- Blog post specific pages
- Contact page.

### Home Page

The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts, then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen. This must be implemented for desktop at least, but if you want a simpler layout for mobile, you can change it from being in a carousel.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.

- Name (Should be more than 5 characters long)
- Email address (Must be a valid email address)
- Subject (Should be more than 15 characters long)
- Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data.

The project has two aspects:

- API from your WordPress installation
- Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.

Note that this is an exam, and therefore tutor support will be limited as per the study plan.

## Level 1 Process

1. Decide on the theme for the blog you’re going to make
2. Create a prototype of the website
3. Install WordPress on your web host and add the blogs on the admin panel.
4. Use the GitHub repo created by GitHub Classroom for your files and deploy to Netlify
5. Build your website using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch your data.
6. Install Hotjar on your website.
7. Ask users to test your website, and adjust based on their feedback and any insights from Hotjar.
8. Write a report documenting your project (template provided in this repository).
9. Submit your report as a PDF and a link to both your Netlify deployment and your GitHub repo.

## Level 2 Process (optional)

1. You can try adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for.
2. Post the data from the contact form to WordPress so you have the details saved.
3. Allow users to submit comments on a blog post, and post this data to WordPress

My own list:

- You can make your form validation more simple by using HTML attributes
- You can filter without going to another page by re-rendering your HTML
  xd redesign
  report

<!-- ################### Later Fixing  ####################  -->

6.  detailed blog posts are;
    The "Date" is a tad hard to understand

7.  When I enter something in the contact form that is not valid and press send, the form updates and my previous input is lost.
    form.onsubmit = (event) => {
    event.preventDefault();
    }
    Consider using that code to avoid the reset
    But then of course you would have to rewrite some of what you have done. Just a tip.
    Maybe not so much rewriting btw. Should work just to call the function you already have inside form.onsubmit
    It seems like i have to enter first and last name to make it accept my request. And also, i did not get any success feedback from it so i don`t know if i have submittet the form or not.
    "placeholder" in place that dissapear when somebody start writing in information this can cause some (mostly elderly) people to forget what information was needed of them so they will have to delete the already written information and re-read what was required of them to write. For this i would suggest you have a "labels" above the input field that do not dissapear once somebody starts writing (you could also make it an animation were once they press on the input field the placeholder transforms into a label and moves from the input field to the top of the input field.

Its nice your filter works but could you make it so it doesn't reload the page when you change it, and that the current selected category is the one that is shown. why not add an event listener to the selector that calls the api with the url address correlating to that, and redraws the posts on the page. with your url + &categories= ids, you can call the api for certain results so just fill the option with ids for there values. I actually do an initial call that grabs all the categories on my page and creates the filter options

20. if your just passing a url into you page creation function you just add the event listener to the select to take the value make a new url and run it again
    yeah your using fetchBlogs(url), so you can just run it with the new url should be pretty simple to setup
    you can hard code the filter,
21. One thing that I've noticed is Nunito isn't loading to the browser so it defaults to the generic sans-serif.

As for the category. It's working, but as you say it's loading a different page, but you want one page that loads different data. This is the advantage of using parameters for functions. Instead of replicating the same code in multiple js files, all you need is to change the category parameter in the url each time you call the API from the one page.

####################error from Validator ##################

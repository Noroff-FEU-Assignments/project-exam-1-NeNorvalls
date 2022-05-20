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
  responsiveness
  header
  css of each pages
  contact design
  xd redesign
  send for testing
  report

<!-- ################### SERIOUS FIXING  ####################  -->

About Page

1. Image is not responsive
2. Text responsiveness on 800px - down 270px
3. Header Container

Contact Page

1. Submit Button is not centered in smaller devices

Details Page

1. Text need margin for responsiveness
2. Title font-size need adjustment for responsiveness

<!-- ################### Later Fixing  ####################  -->

1. small feature- I notice the g breaks the underline on the blog nav field, maybe use a border bottom instead

Feedback:

4. might be an idea to have the same margin on each page to
   on the blog page, no need for paddings.
   if you want paddings, put the padding on the parent element, col div- I noticed you have paddings on the image here
   also. when the loading indicator is displayed, I would remove all the page elements the button,
   maybe make the footer stick to the bottom, below the fold

5. When I filter the blogs by "Challenges", "Celebrations" and "Foods" The "View more" button is misplaced, seems to happen every time there's an odd number off responses from the API? Like 3, 5 and 7 replies
   This is nitpicky On the last page of "Latest posts" There's some shadow-effect that seems a tad out of place? (Image 1)
   On the "About" and "Contact" Page, the footer seems to be floating away from the bottom of the screen, there's also a small typo in the "Contact" page where is says "inn" instead of "in"!
   I see that on the front page, you can click directly on the image/text wherever in the box to enter the detailed pages, it would be great if this was the deal for the "view more" page as well

6. I'm not the sharpest tool in the box when it comes to design, but my 50 cent regarding the design for your detailed blog posts are;
   Having all elements (Image, title, category, body text, author and date) at the same width helps unify the page (Image 2)
   The "Autor" text and your name is contracting a bit much compared to what I usually see in similar situations
   The "Date" is a tad hard to understand
   An option to go back to all blogs (Either via a back button or Breadcrumb, or something similar!)

7. contact us footer on mobile its looks like you forgot to remove the margin bottom

8. and when i wright name ect, i dont get wrong message on all

9. have some problems with the modal on desktop can not click my self out, just if am all the way up to the left

10. i would have some margin between the text and the image

11. when the desktop gets big the "top" button and the image gets oversize, maybe some max width there ?

12. margin on text and the h1 have some issues

13. It looks good! There is good contrast in the colours and a good layout. I checked it on mobile view, and there are some bugs there. The mobile nav overshadows the top part of the pages, so some of the headlines are disappearing behind the nav. I would also add some side padding on the text on the blogposts, and add validation messages on the contact form to specify all the inputs that are missing. If possible, I would also format the publishing date on the blog post to look prettier, but you might not be allowed to use any external frameworks(?). But if you can, I'd recommend moment.js Other than that it's a responsive page and it is easy to navigate around it which is good!

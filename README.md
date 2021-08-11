# Tiny-URL
It is a URL shortening web service , which provides short aliases for redirecting long URLs.  

## :bookmark_tabs: What's In This Document
- [Introduction](#Introduction)
- [Get Up and Running in 5 Minutes](#rocket-get-up-and-running-in-5-minutes)
- [How To Shorten The URL](#How-To-Shorten-The-URL)
- [How To Visit The Long URL With Alias](#How-To-Visit-The-Long-URL-With-Alias)
- [How It Works](#How-It-Works)
- [FAQs](#FAQs)

## Introduction
Tiny URL addresses the problem where the URLs are too long to remember.

So , instead of bookmarking or storing them some where , Tiny-URL can be used to short those URLs with an alias.

Tiny-URL shortens the long URL so it will be easy to remember.

## :rocket: Get Up and Running in 5 Minutes
You can get the Tiny URL up and running in your local dev with in 5 minutes by doing the following steps.

**1.Install Node.js and Vue.js **

Open the terminal & navigate to the root directory of the project.
```shell
cd back-end/
```
Then run the back-end Server which will be lisiting on port number 3000 
``` shell 
npm run dev
```
Get back to the root directory and open front-end and run the front-end service 

``` shell
cd ..
cd front-end/
npm run serve
```

And that's it . Now your Tiny URL is up and running on host address 
```http://localhost:8080```


## How To Shorten The URL 
A Clinet or User need to visit the Our Tiny-URL host address.

Paste the Loong URL in the given field and name the URL with an Alias .

It is as simple as that . Now the long URL is shortened.

## How To Visit The Long URL With Alias 

Type the alias after our web host address.

You will be redirected to the URL you named it with(Long URL).

## How It Works
We store your URL and Alias in a DataBase with Alias as 'KEY'.

When ever you give your alias after our web host address .

we retrive the URL you aliased it with and redirect you to that page.

## FAQs

Q . What if two users give same alias ? 

A . We store the alias of the First user and asks Second user to change the alias because it's already taken. 

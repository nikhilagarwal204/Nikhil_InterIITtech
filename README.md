# Website Hackathon TSG WebDevBeasts
  
## The Problem

Create a video display application that shows YouTube videos of a
particular theme of your choice (sports, gaming, etc.). Fetch videos periodically from the
YouTube Search API and store the data in a database. Build a REST API to serve the data in a
paginated manner. Build a dashboard to display the embedded YouTube videos in reverse chronological
order of publishing time.

## The Solution

Example:

<img width="400" alt="Screenshot 2022-02-20 at 6 56 30 AM" src="https://user-images.githubusercontent.com/45812764/154824837-91ff26a0-5f5a-4dc8-acfc-4d9e78e53d4a.png"><img width="400" alt="Screenshot 2022-02-20 at 6 57 01 AM" src="https://user-images.githubusercontent.com/45812764/154824845-ccacb1b1-b435-4a1f-af1d-00b7967cfe02.png"><img width="400" alt="Screenshot 2022-02-20 at 6 59 10 AM" src="https://user-images.githubusercontent.com/45812764/154824848-bb797f87-6f83-4ef8-9109-190367332551.png"><img width="400" alt="Screenshot 2022-02-20 at 7 01 34 AM" src="https://user-images.githubusercontent.com/45812764/154824888-5f88fdfd-6e44-499f-b04d-8842d780705e.png">



## Installation and Setup Instructions

Clone this whole repository. You will need node and npm installed globally on your machine then only the further steps will work.

### To start Backend Server:
<pre><code>cd server</code></pre>
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>
<pre>Open this URL - http://localhost:5050/</pre>

A glimpse of the MongoDB backend database _utube-dance_ having the collection named _vids_:

<img width="981" alt="Screenshot 2022-02-20 at 6 48 16 AM" src="https://user-images.githubusercontent.com/45812764/154824700-362da2a3-0ebe-4b74-ae23-d72737ef1fb3.png">

To use your own MongoDB, you have to just substitute the DATABASE varibale with your MongoDB URI inside the _/server/config.env_ file. 


### To start Frontend Client:
<pre><code>cd client</code></pre>
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>
<pre>Open this URL - http://localhost:3000/</pre>

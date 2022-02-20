# Website Hackathon TSG WebDevBeasts
  
## The Problem

Create a video display application that shows YouTube videos of a
particular theme of your choice (sports, gaming, etc.). Fetch videos periodically from the
YouTube Search API and store the data in a database. Build a REST API to serve the data in a
paginated manner. Build a dashboard to display the embedded YouTube videos in reverse chronological
order of publishing time.

## The Solution

Example:

<img width="320" alt="Screenshot 2022-01-27 at 3 49 38 AM" src="https://user-images.githubusercontent.com/45812764/151256626-112cb60f-f101-494f-83ca-4b10f11161af.png">&nbsp;&nbsp;&nbsp;<img width="320" alt="Screenshot 2022-01-27 at 3 47 16 AM" src="https://user-images.githubusercontent.com/45812764/151256397-febd596f-199f-4160-a570-345c0e6b949e.png">&nbsp;&nbsp;&nbsp;<img width="320" alt="Screenshot 2022-01-27 at 3 48 58 AM" src="https://user-images.githubusercontent.com/45812764/151256531-b4ee64c4-6b02-4b89-9216-f2ba75095d42.png">&nbsp;&nbsp;&nbsp;<img width="320" alt="Screenshot 2022-01-27 at 4 04 51 AM" src="https://user-images.githubusercontent.com/45812764/151258487-54698d49-b239-4bd8-8dc9-53cdadfa2a47.png">


## Installation and Setup Instructions

Clone this whole repository. You will need node and npm installed globally on your machine then only the further steps will work.

### To start Backend Server:
<pre><code>cd server</code></pre>
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>
<pre>Open this URL - http://localhost:5050/</pre>

A glimpse of the MongoDB backend database having the collection named "vids":

<img width="263" alt="Screenshot 2021-11-18 at 3 38 56 AM" src="https://user-images.githubusercontent.com/45812764/142290463-f53de80e-19e5-4d96-a699-2fc807658dc3.png">

To use your own MongoDB, you have to just substitute the DATABASE varibale with your MongoDB URI inside the _/server/config.env_ file. 


### To start Frontend Client:
<pre><code>cd client</code></pre>
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>
<pre>Open this URL - http://localhost:3000/</pre>

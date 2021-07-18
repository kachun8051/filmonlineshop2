# Assignment of film online shop

   This is a layout design by using Vue.js 3. This project consists 6 components, 1 router and 5 views. Page navigation is archived by router, **route-links** are placed in nav component while **route-view** is placed in article component. Thus, single-page web application is archieved by interaction of route-links and route-view.

## Folder structure

```
+-- src
|   +-- assets
|   |   +-- filmheader2.jpg
|   |   +-- filmleft2.jpg
|   |   +-- imagenotfound.jpg
|   |   +-- onlinefilmshop.jpg
|   +-- components
|   |   +-- Auth2.vue
|   |   +-- Content.vue
|   |   +-- CurrentWeather.vue
|   |   +-- Foot.vue
|   |   +-- Head.vue
|   |   +-- LeftMenu.vue
|   +-- customclass
|   |   +-- clsCustomDate.js
|   |   +-- clsWeather.js
|   +-- router
|   |   +-- index.js
|   +-- views
|   |   +-- FilmList.vue
|   |   +-- FilmListDetail.vue
|   |   +-- FilmSearchAdd.vue
|   |   +-- Home.vue
|   |   +-- StaffInfo.vue
|   +-- App.vue
|   +-- main.css
|   +-- main.js
|   +-- .gitignore
|   +-- README.md

```

## Layout
Parts of layout such as header, section and footer are **single file component** (i.e. SFC). Inside section, there are nav and article *inner* components.

![Imgur](https://i.imgur.com/uwuCUbG.png)

## Component hierarchy
![Imgur](https://i.imgur.com/XQSRwAI.png)

## Router View Relation
![Imgur](https://i.imgur.com/XFXE7rO.png)


## Functions

Film online shop's functions are archived by different views. As corresponding route-link is clicked, route-view would be replaced by different views.

| Function | View |
| ------ | ------ |
| User Login | Auth.vue |
| Film information List | FilmList.vue |
| Individual film detail information | FilmListDetail.vue |
| Film Search & Add | FilmSearchAdd.vue |
| Staff Password Edit | StaffInfo.vue |
| Landing Page | Home.vue |


## License

MIT

## About

Course: Professional Diploma in Cross-platform Applications Development (Web Parts)

Student: Wong Ka Chun

Date: 2021-07-18

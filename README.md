# Assignment of film online shop

   This is a layout design by using Vue.js 3. This project consists 6 components, 1 router and 7 views. Page navigation is archived by router, **route-links** are placed in nav component while **route-view** is placed in article component. Thus, single-page web application is archieved by interaction of route-links and route-view.

## Folder structure

```
+-- src
|   +-- components
|   |   +-- Article.vue
|   |   +-- Card.vue
|   |   +-- Footer.vue
|   |   +-- Header.vue
|   |   +-- Nav.vue
|   |   +-- Section.vue
|   +-- router
|   |   +-- index.js
|   +-- views
|   |   +-- About.vue
|   |   +-- Auth.vue
|   |   +-- FilmList.vue
|   |   +-- FilmListDetail.vue
|   |   +-- Home.vue
|   |   +-- myFavourite.vue
|   |   +-- StaffInfo.vue
|   +-- App.vue
|   +-- main.js

```

## Layout
Parts of layout such as header, section and footer are **single file component** (i.e. SFC). Inside section, there are nav and article *inner* components.

![Imgur](https://i.imgur.com/8VeSddn.png)

## Component hierarchy
![Imgur](https://i.imgur.com/cv6iRKs.png)

## Router View Relation
![Imgur](https://i.imgur.com/jnW12a0.png)

## Functions

Film online shop's functions are archived by different views. As corresponding route-link is clicked, route-view would be replaced by different views.

| Function | View |
| ------ | ------ |
| User Login | Auth.vue |
| Film information List | FilmList.vue |
| Individual film detail information | FilmListDetail.vue |
| Staff information | StaffInfo.vue |
| About us information | About.vue |
| My Favourite | myFavourite.vue |


## License

MIT

## About

Course: Professional Diploma in Cross-platform Applications Development (Web Parts)

Student: Wong Ka Chun

Date: 2021-06-30

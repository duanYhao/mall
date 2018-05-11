import Vue from 'vue'
import 
    { 
        Button, Cell, Header, 
        Tabbar, TabItem, Search, 
        Swipe, SwipeItem,
        Navbar, Badge,
        Lazyload, InfiniteScroll,
        Spinner, Popup,
        Checklist, Field 
   } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Badge.name, Badge)
Vue.component(Spinner.name, Spinner);
Vue.component(Popup.name, Popup);
Vue.component(Checklist.name, Checklist);
Vue.component(Field.name, Field);
Vue.use(Lazyload,{
    preLoad:1.3,
    error:'../static/images/2632e378d9187b4e1cadce68baba22b4.jpg',
    loading:'../static/images/98afcd69d9e67ae7ff8518e561b7f8c3.gif',
    attempt:1
})
Vue.use(InfiniteScroll)
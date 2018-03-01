import AddBlog from "../components/AddBlog"
import ShowBlogs from "../components/ShowBlogs"
import Ditels from '../components/Ditels'
import Sorce from '../components/Sorce'
import Xiang from '../components/Xiang'
export default [
    {path:'/',component:ShowBlogs},
    {path:'/add',component:AddBlog},
    {path:'/ditels/:id',component:Ditels},
    {path: '/get',component:Sorce},
    {path:'/xiang/:id',component:Xiang}
]
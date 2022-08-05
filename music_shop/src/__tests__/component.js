import render from 'react-test-renderer'
import LikeCounter from '../Components/Counter/LikeCounter'
import Header from '../Components/Common/Header'
import {BrowserRouter} from 'react-router-dom'
describe('component testing',()=>{
it('test Like component',()=>{
    const tree=render.create(<LikeCounter/>).toJSON()
    expect(tree).toMatchSnapshot();
})

it('test component having link',()=>{
const tree=render.create(<BrowserRouter><Header/></BrowserRouter>).toJSON()
expect(tree).toMatchSnapshot();
})

})
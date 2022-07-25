import "./Components/Button/Button";
import "../sass/styles.scss";
import "./Components/Svg/SvgComponent";
import "./Components/Tooltip/Tooltip";
import { Printer } from "./Utils/Decorators";
import './Components/Button/button.mdx';
import './Components/Modal/Modal';
// console.log('hello from ts')

const p = new Printer();

console.log(p.message)

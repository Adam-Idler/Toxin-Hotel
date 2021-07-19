import './jquery.datepicker.extension.range.min.js';
import { toggleBtn }            from "../../components/form-elements/toggle/toggle";
import { dropdownActivate }     from "../../components/form-elements/dropdown/dropdown";
import { datepickerActivate }   from "../../components/form-elements/datepicker/datepicker";
import { sliderActivate }       from "../../components/cards/room-mini-card/room-mini-card";
import { likeBtn }              from "../../components/form-elements/like-button/like-button";
import { rangeSliderActivate }  from "../../components/form-elements/range-slider/range-slider";
import { checkboxListActivate } from "../../components/form-elements/checkbox-list/checkbox-list";
import { burgerMenuActivate }   from "../../components/headers-and-footers/burger-menu/burger-menu";

likeBtn();
toggleBtn();
sliderActivate();
dropdownActivate();
datepickerActivate();
burgerMenuActivate();
rangeSliderActivate();
checkboxListActivate();
import { toggleBtn }            from "../components/form-elements/toggle/toggle";
import { likeBtn }              from "../components/form-elements/like-button/like-button";
import { dropdownActivate }     from "../components/form-elements/dropdown/dropdown";
import { datepickerActivate }   from "../components/form-elements/datepicker/datepicker";
import { rangeSliderActivate }  from "../components/form-elements/range-slider/range-slider";
import { checkboxListActivate } from "../components/form-elements/checkbox-list/checkbox-list";
import { sliderActivate }       from "../components/cards/room-mini-card/room-mini-card";
import './jquery.datepicker.extension.range.min.js';

sliderActivate();
dropdownActivate();
datepickerActivate();
rangeSliderActivate();
checkboxListActivate();
toggleBtn();
likeBtn();
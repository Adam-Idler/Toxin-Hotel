import { dropdownActivate } from "../components/dropdown/dropdown";
import { datepickerActivate } from "../components/datepicker/datepicker";
import { toggleBtn } from "../components/toggle/toggle";
import { likeBtn } from "../components/like-button/like-button";
import { checkboxListActivate } from "../components/checkbox-list/checkbox-list";
import { rangeSliderActivate } from "../components/range-slider/range-slider";
import './jquery.datepicker.extension.range.min.js';

dropdownActivate();
datepickerActivate();
rangeSliderActivate();
checkboxListActivate();
toggleBtn();
likeBtn();
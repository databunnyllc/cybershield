/** Getting Some Elements */

let icon = document.getElementsByTagName("i");
let currency_symbol = document.querySelectorAll(".plan-box h2 #sign");
let plan_price = document.querySelectorAll(".plan-box h2 #price");
const plan_box = document.querySelectorAll(".plan-box");

/** Light Up Boxes When Mouse Enters */

const light_up_free = () => {
  plan_box[0].style.boxShadow = "1px 10px 8px 3px grey";
  plan_box[0].style.transition = ".2s ease-in-out";
  icon[0].style.color = "green";
  plan_price[0].style.color = "green";
  plan_price[0].style.transition = ".2s ease-in-out";
}
const dim_free = () => {
  plan_box[0].style.boxShadow = "none";
  icon[0].style.color = "#bbbbbb";
  plan_price[0].style.color = "#bbbbbb";
}

const light_up_premium = () => {
  plan_box[1].style.boxShadow = "1px 10px 8px 3px grey";
  plan_box[1].style.transition = ".2s ease-in-out";
  icon[1].style.color = "green";
  plan_price[1].style.color = "green";
  plan_price[1].style.transition = ".2s ease-in-out";
}
const dim_premium = () => {
  plan_box[1].style.boxShadow = "none";
  icon[1].style.color = "#bbbbbb";
  plan_price[1].style.color = "#bbbbbb";
}

const light_up_recom= () => {
  plan_box[2].style.boxShadow = "1px 10px 8px 3px grey";
  plan_box[2].style.transition = ".2s ease-in-out";
  icon[2].style.color = "green";
  plan_price[2].style.color = "green";
  plan_price[2].style.transition = ".2s ease-in-out";
}
const dim_recom = () => {
  plan_box[2].style.boxShadow = "none";
  icon[2].style.color = "#bbbbbb";
  plan_price[2].style.color = "#bbbbbb";
}

plan_box[0].addEventListener("mouseenter", light_up_free, false);
plan_box[0].addEventListener("mouseleave", dim_free, false);
plan_box[1].addEventListener("mouseenter", light_up_premium, false);
plan_box[1].addEventListener("mouseleave", dim_premium, false);
plan_box[2].addEventListener("mouseenter", light_up_recom, false);
plan_box[2].addEventListener("mouseleave", dim_recom, false);

/** Plans Prices Variables */

let free_plan = "0";
let premium_plan = "29.99";
let recommended_plan = "39.99";

/** A for loop to get all the currency signs. */

for (let i = 0; i < currency_symbol.length; i++)
  currency_symbol[i].textContent = "$";

/** Putting in the prices for the plans. */

plan_price[0].textContent = free_plan;
plan_price[1].textContent = premium_plan;
plan_price[2].textContent = recommended_plan;

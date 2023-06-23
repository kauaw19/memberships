const checkAnnual = document.getElementById("check-annual");
const checkMonth = document.getElementById("check-month");
const priceAnnual = document.getElementById("plan-price-annual");
const priceMonth = document.getElementById("plan-price-month");
const planTypeAnnual = document.getElementById("plan-type-annual");
const planTypeMonth = document.getElementById("plan-type-month");

checkAnnual.addEventListener("change", function (event) {
  priceAnnual.textContent = "$100";
  priceMonth.textContent = "$50";
  planTypeAnnual.textContent = "/year";
  planTypeMonth.textContent = "/year";
});
checkMonth.addEventListener("change", function (event) {
  priceAnnual.textContent = "$36";
  priceMonth.textContent = "$24";
  planTypeAnnual.textContent = "/month";
  planTypeMonth.textContent = "/month";
});

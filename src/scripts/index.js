
const siteBody = document.getElementById("bodyWrapper");

// Getting the navigation area and its elements.
const navItems = document.querySelectorAll("#site-navigation-area a");

/** Duplicating the guard image 3 times */
const cyber_guard_area = document.getElementById("cyber-guard-image-area");
const cyber_guard = document.createElement("IMG");
const cyber_guard_2 = document.createElement("IMG");
const cyber_guard_3 = document.createElement("IMG");

cyber_guard.setAttribute("src", "../Images/CyberGuardIcon.png");
cyber_guard_2.setAttribute("src", "../Images/CyberGuardIcon.png");
cyber_guard_3.setAttribute("src", "../Images/CyberGuardIcon.png");

cyber_guard_area.appendChild(cyber_guard);
cyber_guard_area.appendChild(cyber_guard_2);
cyber_guard_area.appendChild(cyber_guard_3);

/** When mouse over each guard, animate them. */
const animate_guards = () => {
  //Guard 1
  cyber_guard.setAttribute("src", "../Images/CyberGuardIconActive.png");
  $(cyber_guard).animate({
    marginRight: "+=80"
  });
};
const animate_guards_back = () => {
  cyber_guard.setAttribute("src", "../Images/CyberGuardIcon.png");
  $(cyber_guard).animate({
    marginRight: "-=80"
  });
};
const animate_guards_2 = () => {
  //Guard 2
  cyber_guard_2.setAttribute("src", "../Images/CyberGuardIconActive.png");
  $(cyber_guard_2).animate({
    marginRight: "+=80",
    marginLeft: "+=80"
  });
};
const animate_guards_2_back = () => {
  cyber_guard_2.setAttribute("src", "../Images/CyberGuardIcon.png");
  $(cyber_guard_2).animate({
    marginRight: "-=80",
    marginLeft: "-=80"
  });
};
const animate_guards_3 = () => {
  //Guard 3
  cyber_guard_3.setAttribute("src", "../Images/CyberGuardIconActive.png");
  $(cyber_guard_3).animate({
    marginLeft: "+=80"
  });
};
const animate_guards_3_back = () => {
  cyber_guard_3.setAttribute("src", "../Images/CyberGuardIcon.png");
  $(cyber_guard_3).animate({
    marginLeft: "-=80"
  });
};
cyber_guard.addEventListener("mouseenter", animate_guards, false);
cyber_guard.addEventListener("mouseleave", animate_guards_back, false);
cyber_guard_2.addEventListener("mouseenter", animate_guards_2, false);
cyber_guard_2.addEventListener("mouseleave", animate_guards_2_back, false);
cyber_guard_3.addEventListener("mouseenter", animate_guards_3, false);
cyber_guard_3.addEventListener("mouseleave", animate_guards_3_back, false);



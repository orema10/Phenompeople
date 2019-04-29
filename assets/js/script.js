'use strict';
const isMobile = (window.innerWidth <= 768)? true: false;
const hoverEvent = (isMobile)? 'click': 'mouseover';
$('section.stories .slider').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    margin: 20,
});

const searchJobs = (isMobile)? document.querySelector('header.mobile .left-side img.icon'): document.querySelector('a.search-jobs');
if(searchJobs) {
    let searchFieldBox = document.querySelector('.search-field-box');
    if(searchFieldBox) {
        let searchField = searchFieldBox.querySelector('.search-field');
        searchField.querySelector('.close-search-box').addEventListener('click', (e) => {
            searchFieldBox.classList.remove('open');
            searchField.style.height = 0;
            searchField.querySelector('.recommends').classList.remove('active');
            searchField.classList.remove('open');
        });

        searchJobs.addEventListener('click', (e) => {
            e.preventDefault();
            if(searchField.classList.contains('open')) return;
            let searchBoxContainerHeight = searchField.querySelector('.search-box-container').offsetHeight;
            searchField.style.height = searchBoxContainerHeight + 'px';
            searchFieldBox.classList.add('open');
            searchField.classList.add('open');
        });

        searchFieldBox.querySelector('input[type="text"]').addEventListener('focusin', () => {
            let recommends = searchField.querySelector('.recommends');
            if(recommends && !recommends.classList.contains('active')) {
                let recommendsULHeight = recommends.querySelector('ul').offsetHeight;
                searchField.style.height = searchField.offsetHeight + recommendsULHeight + 'px';
                recommends.classList.add('active');
            }
        })
    }
}

const benefitsItems = document.querySelectorAll('section.benefits .benefits-container .single-benefit');
if(benefitsItems.length > 0) {
    benefitsItems.forEach(item => {
        item.addEventListener(hoverEvent, () => {
            benefitsItems.forEach(benefit => {
                benefit.classList.remove('active');
            });
            item.classList.add('active');
        })
    })
}

if(isMobile) {
    var navBarBtn = document.querySelector('header button.nav-bar-toggle');
    if(navBarBtn) {
        navBarBtn.addEventListener('click', () => {
            document.querySelector('nav.mobile-nav-bar').classList.toggle('open');
        });
    }
}
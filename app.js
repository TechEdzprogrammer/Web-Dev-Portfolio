const supportingSection = document.querySelector('.supporting-section');
const supportDescription = document.querySelector('.supporting-section-description');
const supportPhoto = document.querySelector('.supporting-photo-container');

supportingSection.addEventListener('mouseenter', function(){
    supportDescription.classList.add('support-animate');
    supportPhoto.classList.add('photo-animate');
});

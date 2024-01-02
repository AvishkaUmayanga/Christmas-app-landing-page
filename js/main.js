//navigation bar
const navbarIcon = document.querySelector('#navbar-icon');
const navigationBar = document.querySelector('#nav-bar');
const navList = document.querySelectorAll('li');
const navbarUl = document.querySelector('#navbar-ul');
const logo = document.querySelector('#logo');

const resLogo = document.querySelector('#res-logo');
const resClose = document.querySelector('#res-close');
    
    navbarIcon.addEventListener('click', function(){
    console.log('click navbar');

     //darkModeIcon.style.display= 'none';
      navbarIcon.style.display= 'none';
      logo.style.display= 'none';

      resLogo.style.display ='block';
      resClose.style.display = 'block';

      navigationBar.style.borderBottom = '1px solid gray';
      navigationBar.style.borderRadius = '20px';
      navigationBar.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.1)';

      navList.forEach(li =>{
          li.style.display = 'block';
          li.style.marginLeft = 0;
      });
    });



    //close navigations
    resClose.addEventListener('click',function(){

        //darkModeIcon.style.display= 'block';
        navbarIcon.style.display= 'block';
        logo.style.display= 'flex';

        resLogo.style.display ='none';
        resClose.style.display = 'none';

        navigationBar.style.borderBottom = 'none';
        navigationBar.style.borderRadius = 'none';
        navigationBar.style.boxShadow = 'none';

        navList.forEach(li =>{
            li.style.display = 'none';
        });
    });

});
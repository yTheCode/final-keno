
const mobileNavToggle = () => {
    // Select the hamburger button (for opening the mobile menu)
    const headerBtn = document.querySelector('.header__bars');
    const mobileNavMenu = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let mobileNavIsClosed = true;

    headerBtn.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('open');
        mobileNavIsClosed = !mobileNavIsClosed;
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavIsClosed = true;        
            mobileNavMenu.classList.toggle('open');
        })
    })

        // when an event is done, such as "click" this event is stored in e
    document.body.addEventListener('click', (clickEvent) => {
        // checks if  the mobile navigation menu is open
        // and checks if the click happened outside the mobile navigation menu
        // and checks if the click happened outside the header button
        if (!mobileNavIsClosed && !mobileNavMenu.contains(clickEvent.target) && !headerBtn.contains(clickEvent.target)) {
            mobileNavIsClosed = true;        
            mobileNavMenu.classList.toggle('open');
        }
    });
    
};
mobileNavToggle();

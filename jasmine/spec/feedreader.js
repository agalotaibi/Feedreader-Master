/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are the variables defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         //Test that the existence URL by checking the url length != 0
        it('has defined URL', () => {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         //Test that the existence object name by checking the name length != 0
        it('has defined names', () =>{
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //Test the menu element is hidden by default by checking of the existence of menu-hidden class
        it('default hidden element', ()=> {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu hidden when
          * clicked and does it hide when clicked again.
          */

          // Teat the hidden and hidden of the menu
         it('visibility changes on clicked', ()=>{
            const callMenu = document.querySelector(".menu-icon-link");
            const body = document.querySelector('body');
            callMenu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            callMenu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });
    });    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach((done)=> {
            loadFeed(0, ()=>{
                done();
            });
         });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // Test loadFeed funcationality
        it('chick loadFeed work', ()=>{
            const feedEntry = document.querySelector('.feed .entry');
            expect(feedEntry.length).not.toBe(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        var firstTest;
        var secondTest;         
        beforeEach((done)=>{
            loadFeed(0, ()=>{
                firstTest = document.querySelector('.feed').innerHTML;
                loadFeed(1, ()=>{
                    secondTest = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });


    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         // Test the change of the content when new feed is loaded
        it('content changes whene feed loaded', ()=>{
            expect(firstTest).not.toBe(secondTest);
        });
    });    
}());

'use strict';

const path = require('path');
module.exports = Franz => {
  const getMessages = () => {
    let count = 0
    const $mainMenus = document.querySelector('#menu-pannel>.main-menus')
    if ($mainMenus) {
      const $menuItems = $mainMenus.querySelectorAll('li.menu-item')
      $menuItems.forEach($item => {
        const $unread = $item.querySelector('all-conv-unread-count em.ng-binding')
        if ($unread) {
          const badge = parseInt($unread.innerText)
          count += isNaN(badge) ? 0 : badge
        }
      })
    }

    Franz.setBadge(count);
  }

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);


};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzYXBwL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJpIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxVQUFNQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixTQUExQixDQUFqQjtBQUNBLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosU0FBU0ssTUFBN0IsRUFBcUNELEtBQUssQ0FBMUMsRUFBNkM7QUFDM0MsVUFBSUosU0FBU0ksQ0FBVCxFQUFZRixnQkFBWixDQUE2QixhQUE3QixFQUE0Q0csTUFBNUMsS0FBdUQsQ0FBM0QsRUFBOEQ7QUFDNURGLGlCQUFTLENBQVQ7QUFDRDtBQUNGOztBQUVEO0FBQ0FMLFVBQU1RLFFBQU4sQ0FBZUgsS0FBZjtBQUNELEdBWkQ7O0FBY0E7QUFDQUwsUUFBTVMsU0FBTixDQUFnQmIsS0FBS2MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWhCOztBQUVBO0FBQ0FYLFFBQU1ZLElBQU4sQ0FBV1gsV0FBWDtBQUNELENBcEJEIiwiZmlsZSI6IndoYXRzYXBwL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChGcmFueikgPT4ge1xuICBjb25zdCBnZXRNZXNzYWdlcyA9IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVucmVhZCcpO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZWxlbWVudHNbaV0ucXVlcnlTZWxlY3RvckFsbCgnLmljb24tbXV0ZWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gIH07XG5cbiAgLy8gaW5qZWN0IGZyYW56LmNzcyBzdHlsZXNoZWV0XG4gIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG5cbiAgLy8gY2hlY2sgZm9yIG5ldyBtZXNzYWdlcyBldmVyeSBzZWNvbmQgYW5kIHVwZGF0ZSBGcmFueiBiYWRnZVxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=
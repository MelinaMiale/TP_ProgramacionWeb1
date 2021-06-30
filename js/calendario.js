document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Android',
                start: '2021-05-23',
                end:'2021-06-01'
            },
            {
                title: 'Full Stack',
                start: '2021-06-28',
                end:'2021-11-30'
            },
            {
                title: 'Diseño Web',
                start: '2021-06-02',
                end:'2021-06-04'
            }
        ]
    }); 

    calendar.render();
  });
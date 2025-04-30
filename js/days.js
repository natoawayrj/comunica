document.addEventListener('DOMContentLoaded', function() {
  const annualCalendarContainer = document.querySelector('.annual-calendar-container');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  function generateMonthCalendar(year, month) {
      const monthDiv = document.createElement('div');
      monthDiv.classList.add('month-calendar');

      const monthHeader = document.createElement('h3');
      monthHeader.classList.add('month-header');
      monthHeader.textContent = new Date(year, month).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      monthDiv.appendChild(monthHeader);

      const calendarTable = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      const headerRow = document.createElement('tr');
      daysOfWeek.forEach(day => {
          const th = document.createElement('th');
          th.textContent = day;
          headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      calendarTable.appendChild(thead);

      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const startingDay = firstDayOfMonth.getDay();

      let dayCounter = 1;
      for (let i = 0; i < 6; i++) {
          const row = document.createElement('tr');
          for (let j = 0; j < 7; j++) {
              const cell = document.createElement('td');
              if (i === 0 && j < startingDay) {
                  // Não preenche os dias anteriores
              } else if (dayCounter <= daysInMonth) {
                  cell.textContent = dayCounter;
                  cell.classList.add('day');
                  dayCounter++;
              } else {
                  // Não preenche os dias seguintes
              }
              row.appendChild(cell);
          }
          tbody.appendChild(row);
          if (dayCounter > daysInMonth) {
              break; // Para de criar linhas se todos os dias do mês foram preenchidos
          }
      }
      calendarTable.appendChild(tbody);
      monthDiv.appendChild(calendarTable);

      return monthDiv;
  }

  function isWeekday(date) {
      const day = date.getDay();
      return day !== 0 && day !== 6;
  }

  function getFifthWeekday(year, month) {
      let count = 0;
      for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
          const currentDate = new Date(year, month, day);
          if (isWeekday(currentDate)) {
              count++;
              if (count === 5) {
                  return day;
              }
          }
      }
      return null;
  }

  function highlightFifthWeekday(monthCalendar, year, month) {
      const fifthWeekday = getFifthWeekday(year, month);
      if (fifthWeekday) {
          const dayCells = monthCalendar.querySelectorAll('td.day');
          dayCells.forEach(cell => {
              if (parseInt(cell.textContent) === fifthWeekday) {
                  cell.classList.add('fifth-weekday');
              }
          });
      }
  }

  for (let month = 0; month < 12; month++) {
      const monthCalendarDiv = generateMonthCalendar(currentYear, month);
      highlightFifthWeekday(monthCalendarDiv, currentYear, month);
      annualCalendarContainer.appendChild(monthCalendarDiv);
  }
});
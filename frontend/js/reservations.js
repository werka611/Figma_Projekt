const fallbackData = [
    { id: 1, name: "Anna Kowalska", date: "2026-05-10", time: "14:00", guests: 2, status: "Potwierdzone" },
    { id: 2, name: "Marek Nowak", date: "2026-05-10", time: "16:30", guests: 4, status: "Oczekujące" },
    { id: 3, name: "Julia Wiśniewska", date: "2026-05-11", time: "12:00", guests: 1, status: "Potwierdzone" },
    { id: 4, name: "Piotr Zieliński", date: "2026-05-11", time: "18:00", guests: 3, status: "Anulowane" },
    { id: 5, name: "Zofia Wójcik", date: "2026-05-12", time: "15:00", guests: 2, status: "Potwierdzone" },
    { id: 6, name: "Adam Kamiński", date: "2026-05-12", time: "11:00", guests: 5, status: "Oczekujące" },
    { id: 7, name: "Magdalena Lewandowska", date: "2026-05-13", time: "13:30", guests: 2, status: "Potwierdzone" },
    { id: 8, name: "Robert Mazur", date: "2026-05-13", time: "17:00", guests: 4, status: "Potwierdzone" },
    { id: 9, name: "Karolina Dąbrowska", date: "2026-05-14", time: "10:30", guests: 2, status: "Oczekujące" },
    { id: 10, name: "Michał Król", date: "2026-05-14", time: "19:00", guests: 6, status: "Potwierdzone" }
];

document.addEventListener('DOMContentLoaded', () => {
    fetchReservations();
});

async function fetchReservations() {
    const listContainer = document.getElementById('reservations-list');
    try {
        const response = await fetch('data/reservations.json');
        if (response.ok) {
            const data = await response.json();
            renderReservations(data);
        } else {
            renderReservations(fallbackData);
        }
    } catch (e) {
        renderReservations(fallbackData);
    }
}

function renderReservations(data) {
    const listContainer = document.getElementById('reservations-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    data.forEach(res => {
        const card = document.createElement('div');
        card.style.cssText = 'background: white; padding: 20px; border-radius: 12px; border: 1px solid #f0ede4; box-shadow: 0 2px 10px rgba(0,0,0,0.02);';
        let statusColor = res.status === 'Potwierdzone' ? '#2e7d32' : (res.status === 'Anulowane' ? '#c62828' : '#ef6c00');
        card.innerHTML = `
            <h4 style="margin: 0 0 10px 0; font-family: 'Inter', sans-serif; color: #2c3e2d;">${res.name}</h4>
            <p style="margin: 5px 0; font-size: 0.9rem; color: #6b705c;">${res.date} | ${res.time}</p>
            <p style="margin: 5px 0; font-size: 0.85rem; color: #a5a58d;">Gości: ${res.guests}</p>
            <span style="display: inline-block; margin-top: 10px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: ${statusColor}; font-weight: 600;">● ${res.status}</span>
        `;
        listContainer.appendChild(card);
    });
}

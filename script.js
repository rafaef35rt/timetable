const timetable = {
    Monday: [
        { time: "8:00 - 9:00", class: "Digital Logic Circuit", room: "D-206" },
        { time: "9:00 - 10:00", class: "Linear Algebra", room: "D-206" },
        { time: "10:00 - 12:00", class: "E.V.P.R.", room: "B-815" },
        { time: "14:00 - 16:00", class: "T.E.P.E.", room: "H-014" }
    ],

    Tuesday: [
        { time: "8:00 - 9:00", class: "Chemistry", room: "D-205" },
        { time: "9:00 - 10:00", class: "Linear Algebra", room: "D-206" },
        { time: "10:00 - 12:00", class: "Programming", room: "B-714" },
        { time: "14:00 - 16:00", class: "English", room: "B-819" }
    ],

    Wednesday: [
        { time: "8:00 - 10:00", class: "Chemistry Lab", room: "D-423" },
        { time: "10:00 - 11:00", class: "Digital Logic Circuit", room: "D-304" },
        { time: "11:00 - 12:00", class: "Linear Algebra", room: "D-304" },
        { time: "14:00 - 16:00", class: "T.E.P.E.", room: "H-014" }
    ],

    Thursday: [
        { time: "9:00 - 10:00", class: "Chemistry", room: "D-206" },
        { time: "10:00 - 12:00", class: "Programming", room: "B-714" },
        { time: "13:00 - 15:00", class: "Break", room: "English" }
    ],

    Friday: [
        { time: "8:00 - 9:00", class: "Linear Algebra", room: "D-405" },
        { time: "9:00 - 10:00", class: "Chemistry", room: "D-404" },
        { time: "10:00 - 12:00", class: "E.V.P.R", room: "B-815" },
        { time: "14:00 - 16:00", class: "Programming", room: "B-714" }
    ]
};

// Get today's day
const today = new Date();
const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

document.getElementById("day").innerText = Today is ${dayName};

const tableBody = document.getElementById("timetable-body");
const todaySchedule = timetable[dayName];

if (todaySchedule) {
    todaySchedule.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.time}</td>
            <td>${item.class}</td>
            <td>${item.room}</td>
        `;

        tableBody.appendChild(row);
    });
} else {
    tableBody.innerHTML = `
        <tr>
            <td colspan="3">No classes today 🎉</td>
        </tr>
    `;
}

import { useState } from 'react';
import SeatGrid from './SeatGrid';
import './TicketBooking.css';
// const TicketBooking = () => {
//   const seatsArray = new Array(125).fill(0).map((_, index) => {
//     return {
//       seatNum: index + 1,
//       booked: false
//     };
//   });
//   //   console.log(seatsArray);
//   const [seats, setSeats] = useState(seatsArray);
//   const [bookedCount, setBookedCount] = useState(0);
//   // console.log(seats);
//   return (
//     <>
//       <h1>Seat booking system</h1>

//       <SeatGrid
//         seats={seats}
//         setSeats={setSeats}
//         bookedCount={bookedCount}
//         setBookedCount={setBookedCount}
//         section='VIP'
//         seatingGrid='5'
//       />
//       <SeatGrid
//         seats={seats}
//         setSeats={setSeats}
//         bookedCount={bookedCount}
//         setBookedCount={setBookedCount}
//         section='General'
//         seatingGrid='6'
//       />
//       <SeatGrid
//         seats={seats}
//         setSeats={setSeats}
//         bookedCount={bookedCount}
//         setBookedCount={setBookedCount}
//         section='Economy '
//         seatingGrid='8'
//       />
//     </>
//   );
// };

const sectionsData = [
  { name: 'VIP', rows: 5, seatsPerRow: 5 },
  { name: 'General', rows: 6, seatsPerRow: 6 },
  { name: 'Economy', rows: 8, seatsPerRow: 8 }
];

const TicketBooking = () => {
  const [bookedSeats, setBookedSeats] = useState({});

  const toggleSeat = (section, row, seat) => {
    const key = `${section}-${row}-${seat}`;
    setBookedSeats((prev) => {
      const updatedSeats = { ...prev };
      if (updatedSeats[key]) {
        delete updatedSeats[key]; // Unselect if already selected
      } else {
        if (Object.keys(updatedSeats).length < 5) {
          updatedSeats[key] = true; // Select seat if less than 5 are selected
        } else {
          alert('You can only book a maximum of 5 seats.');
        }
      }
      return updatedSeats;
    });
  };

  const isBooked = (section, row, seat) => {
    return bookedSeats[`${section}-${row}-${seat}`];
  };

  const confirmBooking = () => {
    const seatNumbers = Object.keys(bookedSeats).map((key) =>
      key.replace(/-/g, ' ')
    );
    if (seatNumbers.length) {
      alert(`Seats booked: ${seatNumbers.join(', ')}`);
    } else {
      alert('No seats selected.');
    }
  };

  return (
    <div className='App'>
      {sectionsData.map((section) => (
        <div key={section.name} className='section'>
          <h3>
            {section.name} Section ({section.rows}x{section.seatsPerRow})
          </h3>
          <div className='seat-grid'>
            {[...Array(section.rows)].map((_, rowIndex) => (
              <div key={rowIndex} className='seat-row'>
                {[...Array(section.seatsPerRow)].map((_, seatIndex) => (
                  <div
                    key={seatIndex}
                    className={`seat ${
                      isBooked(section.name, rowIndex + 1, seatIndex + 1)
                        ? 'booked'
                        : ''
                    }`}
                    onClick={() =>
                      toggleSeat(section.name, rowIndex + 1, seatIndex + 1)
                    }
                  >
                    {seatIndex + 1}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={confirmBooking} className='confirm-button'>
        Confirm Booking
      </button>
    </div>
  );
};

export default TicketBooking;

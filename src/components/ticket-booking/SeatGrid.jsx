/* eslint-disable react/prop-types */
const SeatGrid = ({
  seats,
  setSeats,
  bookedCount,
  setBookedCount,
  section,
  seatingGrid
}) => {
  let sectionSeating;
  if (section === 'VIP') {
    sectionSeating = seats.slice(0, seatingGrid * seatingGrid);
  } else if (section === 'General') {
    sectionSeating = seats.slice(25, 25 + seatingGrid * seatingGrid);
  } else {
    sectionSeating = seats.slice(61, 61 + seatingGrid * seatingGrid);
  }
  //   console.log(section, sectionSeating.length);
  //   console.log(sectionSeating);

  const handleBookTicket = (seat) => {
    if (!seat.booked && bookedCount >= 5) {
      alert('Cannot book more than 5 seats');
      return;
    }

    setSeats((prevSeats) =>
      prevSeats.map((ticket) =>
        ticket.seatNum === seat.seatNum
          ? { ...ticket, booked: !ticket.booked }
          : ticket
      )
    );
    setBookedCount((prevCount) =>
      seat.booked ? prevCount - 1 : prevCount + 1
    );
  };

  return (
    <>
      <div>
        <h3>
          {section} Section({`${seatingGrid}x${seatingGrid}`})
        </h3>
        <div
          style={{
            display: 'grid',
            backgroundColor:
              section === 'VIP'
                ? 'green'
                : section === 'General'
                ? 'yellow'
                : 'orange',
            gridTemplateColumns: `repeat(${seatingGrid},1fr )`
          }}
        >
          {sectionSeating.map((seat, index) => (
            <div
              key={index}
              style={{
                border: '1px solid black',
                backgroundColor: seat.booked && 'red'
              }}
              onClick={() => handleBookTicket(seat)}
            >
              Seat {seat.seatNum}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeatGrid;

-- Hotele w danym mieście, oraz najwyższa i najniższa cena pokoju w hotelu
SELECT h.name,
    h.city,
    h.rating,
    MIN(r.price) as minPrice,
    MAX(r.price) as maxPrice
FROM hotels h
    INNER JOIN rooms r ON h.hotelId = r.hotelId
GROUP BY h.name;
-- Wybierz wszystkie miasta
select distinct h.city
from aipsdb.hotel_entity h 

-- Wybierz pokoje z hotelu
select r.roomId,
    r.price
from aipsdb.room_entity r
    inner join aipsdb.hotel_entity h on r.hotelId = h.hotelId
where r.hotelId = :hotelId
order by r.price desc
export interface Reservation {
    _id?: string,
    user_id: string,
    car_id: string,
    start_time: Date,
    end_time: Date,
    resPrice: Number,
    duration: Number,
}
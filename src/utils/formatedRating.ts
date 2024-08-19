export default function formatedRating(ratingList: number[]) {
    let total = 0;
    ratingList.forEach((rating: number) => {
        total += rating;
    });
    return (total / ratingList.length).toFixed(2);
}
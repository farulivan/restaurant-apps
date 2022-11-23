import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = ({id, pictureId, name, city, description, rating}) => `
    <div class="restaurant__item" id=${id}>
        <div class="restaurant__image">
            <img src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" alt="picture of ${name}" />
        </div>
        <div class="restaurant__info">
            <p class="restaurant__name">${name}</p>
            <p class="restaurant__city">${city}</p>
            <p class="restaurant__description">${description}</p>
            <p class="restaurant__rating">⭐ <span>${rating}</span>/5</p>
        </div>
    </div>
`

export {
    createRestaurantItemTemplate
};
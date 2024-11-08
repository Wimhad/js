const getRating = ({ likes, dislikes}) => {
    return likes - dislikes;
};

export default getRating;

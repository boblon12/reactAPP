export const pageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}


export const pagesArray = (totalPages) => {

    let pagesArray = [];
    for (let i =0; i < totalPages; i++) {
        pagesArray.push(i+1);
      }

    return pagesArray;
}

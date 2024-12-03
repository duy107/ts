interface ObjectPagination {
    currentPage: number,
    limitItems: number,
    skip?: number,
    numberPage?: number
}
const paginationHelper = (objectPagination: ObjectPagination , numberProducts: number, query: Record<string, any>): ObjectPagination => {
    // lấy trang hiện tại từ URL
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page);
    }
    if (query.limit) {
        objectPagination.limitItems = parseInt(query.limit)
    }
    // vị trí bắt đầu (bỏ qua số phần tử) = (trang hiện tại - 1) * số lượng  phần tử mỗi trang
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;
    objectPagination.numberPage = Math.ceil(numberProducts / objectPagination.limitItems);
    return objectPagination;
}
export default paginationHelper;
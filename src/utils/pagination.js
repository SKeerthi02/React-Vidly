import _ from 'lodash';


export function paginate(array, currentPage, pageSize){
    const index = (currentPage-1) * pageSize;
    return _(array).slice(index).take(pageSize).value();
}
import makeRequest from "~/api/helpers/makeRequest";

const all = () => {
    return makeRequest('products/all2.php');
};

export { all };

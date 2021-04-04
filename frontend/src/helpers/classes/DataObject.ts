export default interface DataObject {
    parseFromResponse: (json:string) => DataObject|null;
}
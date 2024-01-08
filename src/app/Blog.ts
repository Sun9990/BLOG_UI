export interface Blog{
    _id : _ID,
    title: string;
    desc: string;
    current_time: string;
    updated_time: string;
}
export interface _ID{
    $oid: string
}
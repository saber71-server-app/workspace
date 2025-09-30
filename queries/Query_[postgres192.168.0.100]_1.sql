create table if not exists logs
(
    id      serial primary key,
    content text not null
);

alter table logs add column labels varchar(20)[];
alter table logs add column level varchar(20);
alter table logs add column create_time timestamp;
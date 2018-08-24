export class Element {
    public Тип: string;
    public Размер: string;
    public Расположение: string;
    public Владелец: string;
    public Изменено: Date;
    public Создано: Date;

    constructor(type: string, size: string, location: string, owner: string, changed: Date, created: Date) {
        this.Тип = type;
        this.Размер = size;
        this.Расположение = location;
        this.Владелец = owner;
        this.Изменено = changed;
        this.Создано = created;
    }
}

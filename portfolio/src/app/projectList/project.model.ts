export class Project {
    public name: string;
    public techStack: string;
    public iconPath: string;

    constructor(name: string, techStach: string, iconPath: string) {
        this.name = name;
        this.techStack = techStach;
        this.iconPath = iconPath;
    }
}

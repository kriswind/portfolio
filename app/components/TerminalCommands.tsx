export const Help = (): string => {
    return `    List of all the available commands:

    help -- displays this help message
    about -- displays information about me
    buttons -- displays the functionality of the buttons at the top left of the terminal
    clear -- clears the terminal screen
    socials -- displays my socials
    light -- sets the terminal to lightmode
    dark -- sets the terminal to darkmode
    blog -- links to my blog page
    `;
};

export const About = (): string => {
    return `    Hi my name is Christopher Windsor and I\'m a software engineer living in South Africa.
    I have a passion for creating software.`;
}

export const Buttons = (): string => {
    return `    Buttons:
    
    Red Button -- Press the red button to reset the terminal.
    Yellow Button -- Press the yellow button to display the help message.
    Green Button -- Press the green button for a list of my socials.
    `;
}

export const Socials = (): string => {
    return `    Socials:

    GitHub -- github.com/kriswind
    LinkedIn -- linkedin.com/in/kriswind
    Twitter -- twitter.com/krisvayu
    `;
}
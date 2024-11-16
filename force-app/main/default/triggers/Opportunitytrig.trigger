trigger Opportunitytrig on Opportunity (before insert,before update) {
    Updatestage.us(Trigger.New);
}
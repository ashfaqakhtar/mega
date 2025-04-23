export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member"
}



export const AvailableUserRoles = Object.values(UserRolesEnum) // data type of AvailableUserRoles will be object

// console.log(typeof(AvailableUserRoles));
// console.log(AvailableUserRoles);



export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done"
};

export const AvailableTaskStatuses = Object.values(TaskStatusEnum);



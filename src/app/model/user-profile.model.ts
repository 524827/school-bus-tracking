/**
 * @description - This interface defines the structure of user's profile data.
 * @interface - UserProfileModel
 */
export interface UserProfileModel {
  // Id of the user.
  userId: string;

  // Name of the user.
  userName: string;

  // Address of the user.
  userAddress: string;

  // Mobile number of the user.
  userMobileNumber: number;

  // Email address of the user.
  userEmail: string;

  // Photo of the user.
  userPhoto: string;
}

/**
 * @description - This interface defines the structure of school's profile data.
 * @interface - SchoolProfileModel
 */
export interface SchoolProfileModel {
  // Name of the school.
  schoolName: string;

  // Address of the school.
  schoolAddress: string;
}

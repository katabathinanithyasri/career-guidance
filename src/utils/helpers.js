export const formatName = (name) => {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
};

export const truncateText = (text, limit = 100) => {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export const generateAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${name}&background=4f46e5&color=fff`;
};
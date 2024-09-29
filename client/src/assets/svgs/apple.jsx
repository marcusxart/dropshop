const AppleIcon = ({ fill }) => {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7845 15.9813C10.8751 16.8294 9.88228 16.6957 8.92766 16.2938C7.91677 15.8828 6.98828 15.8647 5.92212 16.2938C4.58565 16.8474 3.88225 16.6867 3.08339 15.9823C-1.44251 11.4875 -0.775285 4.64641 4.36358 4.39721C5.61564 4.45951 6.48786 5.0574 7.2204 5.11066C8.3157 4.89662 9.36377 4.28064 10.5324 4.36103C11.9322 4.46855 12.9903 5.00414 13.6857 5.96881C10.7917 7.63889 11.478 11.3097 14.1308 12.3366C13.6023 13.6761 12.915 15.0065 11.7744 15.9893L11.7845 15.9813ZM7.12695 4.34495C6.98828 2.35131 8.6674 0.709362 10.5967 0.548584C10.866 2.85273 8.42624 4.56803 7.12796 4.34395"
        fill={fill || "#2F3031"}
      />
    </svg>
  );
};

export default AppleIcon;

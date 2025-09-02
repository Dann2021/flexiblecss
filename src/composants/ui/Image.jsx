import clsx from "../classe";

function Image({ source, className, alt, width, height, masque, ...props }) {
  return (
    <img
      loading="lazy"
      src={source}
      className={clsx("image", className)}
      alt={alt}
      width={width}
      height={height}
      hidden={masque}
      {...props}
    />
  );
}

export default Image;
